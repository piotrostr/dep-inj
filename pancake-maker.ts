interface Pan {
  putOil: () => void;
  flipPancake: () => boolean;
}

export class Tefal implements Pan {
  madeOfTeflon = true;

  putOil() {}

  flipPancake() {
    // *flips successfully*
    return true;
  }

  increaseRiskOfCancer() {}
}

export class CastIron implements Pan {
  putOil() {}

  flipPancake() {
    return true;
  }

  getSuperHot() {}
}

export class PancakeMaker {
  pan: Pan;

  pancake: any;
  pancakeCount: number;

  constructor(pan: Pan) {
    this.pan = pan;
  }

  makePancake() {
    if (!this.pan) {
      console.error("I have no pan!?");
    }
    this.pan.putOil();
    this.pan.flipPancake();
    this.pancakeCount += 1;

    console.log("Done! Pancake is tasty.");
  }
}
