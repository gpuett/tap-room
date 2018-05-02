export class Keg {
  pints: number = 124;
  constructor(public price: number, public name: string, public brand: string, public alcoholContent: number, public imgString: string){ };

  sellPint() {
    this.pints -= 1;
  }
}
