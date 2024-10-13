#!/usr/bin/env node

import { welcomeUser, playGame } from '../src/even-not-even.js';

const userName = welcomeUser();
playGame(userName);

