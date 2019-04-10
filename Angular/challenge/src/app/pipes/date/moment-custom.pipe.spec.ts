import { MomentCustomPipe } from './moment-custom.pipe';

describe('MomentCustomPipe', () => {
  it('create an instance', () => {
    const pipe = new MomentCustomPipe();
    expect(pipe).toBeTruthy();
  });
});
