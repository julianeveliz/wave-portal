// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    string lastWaveDate = 'Dummy date';

    constructor() {
        console.log("This is my first Smart Contract :)");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);
    }

    function saveLastWaveDate(string memory _lastdate) public {
        lastWaveDate = _lastdate;
        console.log("Last wave date: ", lastWaveDate);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}