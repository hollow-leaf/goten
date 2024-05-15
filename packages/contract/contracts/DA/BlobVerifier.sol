// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract MyContract {
    address public constant SUCCINCT_GATEWAY = 0x6c7a05e0AE641c6559fD76ac56641778B6eCd776;
    bytes32 public constant FUNCTION_ID = 0x0635fc47f3c422a864e1b3259f48eb0ddc807b3e977f36ea002ad24dc8c91660;

    uint256 public nextRequestId = 1;
    mapping(uint256 => Request) public requests;

    struct Request {
        address sender;
        // Any additional request context needed can go here
        // (...)
    }

    function requestCallback(/* Input variables can go here */) external payable {
        uint256 requestId = nextRequestId++;
        requests[requestId] = Request(msg.sender);
        bytes memory input = abi.encodePacked(
            // Encode input data here
            // (...)
        );
        ISuccinctGateway(SUCCINCT_GATEWAY).requestCallback{value: msg.value}(
            FUNCTION_ID,
            input,
            abi.encode(requestId),
            this.handleCallback.selector,
            300000
        );
    }

    function handleCallback(bytes memory output, bytes memory context) external {
        require(msg.sender == SUCCINCT_GATEWAY && ISuccinctGateway(SUCCINCT_GATEWAY).isCallback());
        uint256 requestId = abi.decode(context, (uint256));
        Request storage request = requests[requestId];
        // Process request here
        // (...)
        delete requests[requestId];
    }
}
    
interface ISuccinctGateway {
    function requestCallback(
        bytes32 functionId,
        bytes memory input,
        bytes memory context,
        bytes4 callbackSelector,
        uint32 callbackGasLimit
    ) external payable returns (bytes32);

    function isCallback() external view returns (bool);
}