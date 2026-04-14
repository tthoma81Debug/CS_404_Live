// exampleJavascript.ts
// Same idea as the JS version, but with TypeScript types.
// Browsers cannot execute this file directly.

import { formatDistanceToNow } from 'date-fns';

interface User {
  name: string;
}

class Greeter {
  #name: string;

  constructor(name: string | null | undefined) {
    this.#name = name ?? 'Anonymous';
  }

  greet(): string {
    return `Hello, ${this.#name}!`;
  }
}

const statusEl = document.querySelector<HTMLElement>('#status');

// Pretend we got this from somewhere else on the page
const maybeUser = (window as unknown as { currentUser?: User }).currentUser;
const userName = maybeUser?.name ?? 'friend';

const greeter = new Greeter(userName);

if (statusEl) {
  statusEl.textContent =
    `✅ TypeScript + esbuild ran: ${greeter.greet()} ` +
    `(last updated ${formatDistanceToNow(new Date(2025, 0, 1))} ago)`;
    
// @ts-expect-error: userAgentData is not yet widely supported, so TypeScript doesn't know about it.
  if (navigator?.userAgentData?.mobile) {
    statusEl.style.color = 'green';
  } else {
    statusEl.style.color = 'blue';
  }
}