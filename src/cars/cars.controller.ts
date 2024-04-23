import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  
  constructor(
    private readonly carsService: CarsService
  ){}
  
  @Get()
  //Use el decorador GET para manejar las rutas
  getAllCars() {
    return this.carsService.findAll();
  }

  
  @Get(":id")
  //usa los query params
  getCarById( @Param('id') id: string){
    //usa el decorador param para poder extrar el query param
    //Siempre retorna un string en los params
    
    return this.carsService.findOneById( Number(id) );
  }

}
