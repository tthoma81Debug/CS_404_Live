// exampleJavascript.js
// This file is intentionally written so that most browsers
// cannot run it directly without a bundler like esbuild.

// 1) "Bare" npm import that browsers do not understand.
import { formatDistanceToNow } from 'date-fns';

// 2) Very new JS syntax (class fields, ??, ?., etc.)
class Greeter {
  #name;

  constructor(name) {
    this.#name = name ?? 'Anonymous';
  }

  greet() {
    return `Hello, ${this.#name}!`;
  }
}

const statusEl = document.querySelector('#status');

// Optional chaining + nullish coalescing
const userName = window.currentUser?.name ?? 'friend';
const greeter = new Greeter(userName);

// If any of this fails to parse or load, the text below never changes.
statusEl.textContent =
  `✅ JS ran: ${greeter.greet()} ` +
  `(last updated ${formatDistanceToNow(new Date(2025, 0, 1))} ago)`;

// Use a very new Web API; older browsers do not know userAgentData.
if (navigator?.userAgentData?.mobile) {
  statusEl.style.color = 'green';
} else {
  statusEl.style.color = 'blue';
}