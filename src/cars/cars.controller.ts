import { Controller, Get, Param, ParseIntPipe , Post, Body, Patch, Delete, ParseUUIDPipe, UsePipes, ValidationPipe} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'

//@UsePipes( ValidationPipe)
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
  getCarById( @Param('id' , new ParseUUIDPipe({
    version:"4"
  }) ) id: string){
    //usa el decorador param para poder extrar el query param
    //Siempre retorna un string en los params
    
   // throw new Error('ups')
    return this.carsService.findOneById( id );
  }

  //los pipes por lo general se manejan por la palabra parse

  @Post()
  //@UsePipes( ValidationPipe)
  //Se puede usar a nivel de endpoint o a nivel de controlador, si es que se repite en vario endpoints del controlador
  createCar( @Body() createCarDto: CreateCarDto ){
    const car: Car = {
      id: uuid(),
      ...createCarDto
    }
   return this.carsService.createCar(createCarDto);
  }

  @Patch(':id')
  updateCar( @Param('id', ParseUUIDPipe) id:string,
    @Body() updateCarDto: UpdateCarDto
 ){
  return this.carsService.update(id, updateCarDto)
  }

  @Delete(':id')
  deleteCar( @Param('id', ParseUUIDPipe) id:string){
   return this.carsService.delete(id)
  }
}
