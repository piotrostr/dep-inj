import { PancakeMaker, Tefal } from "./pancake-maker";

function main() {
  const pan = new Tefal();
  const pancakeMaker = new PancakeMaker(pan);
  pancakeMaker.makePancake();
}

main();

// file: main.test.ts
// function test_main() {
// const mockPan = new MockTefalPan();
// const pancakeMaker = new PancakeMaker(mockPan);
// }
