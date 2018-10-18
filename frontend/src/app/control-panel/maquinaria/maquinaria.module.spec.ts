import { MaquinariaModule } from './maquinaria.module';

describe('MaquinariaModule', () => {
  let maquinariaModule: MaquinariaModule;

  beforeEach(() => {
    maquinariaModule = new MaquinariaModule();
  });

  it('should create an instance', () => {
    expect(maquinariaModule).toBeTruthy();
  });
});
