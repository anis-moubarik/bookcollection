import { CustomdatePipe } from './customdate.pipe';
import {DatePipe} from '@angular/common';

describe('CustomdatepipePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomdatePipe(new DatePipe("fi"));
    expect(pipe).toBeTruthy();
  });
});
