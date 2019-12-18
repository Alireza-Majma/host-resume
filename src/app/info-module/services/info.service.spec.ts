/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InfoService } from './info.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';


describe('Service: Info', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService, InfoService],
      imports: [HttpClientModule]
    });
  });

  it('should ...', inject([InfoService], (service: InfoService) => {
    expect(service).toBeTruthy();
  }));
});