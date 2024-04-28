import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import {  CARS_SEED, BRANDS_SEED} from './data/'
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  
  constructor(
    private readonly carService: CarsService,
    private readonly brandService: BrandsService
  ){}

  populateDB(){
    this.carService.fillCardSeedData( CARS_SEED );
    this.brandService.fillbrandsSeedData( BRANDS_SEED )
    return "SEED EXCUTED"
  }
}
