import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Brand } from './entities/brand.entity'
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [];

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name,
      createdAt: new Date().getTime(),
    };

    this.brands.push(brand);

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id == id);
    if (!brand) throw new NotFoundException(`Brand with ID: ${id} not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    
    let brandDB = this.findOne( id );

    this.brands.map( car => {
      if( car.id == id ){
        brandDB.updatedAt = new Date().getTime();
        brandDB = {...brandDB,...updateBrandDto }
        return brandDB;
      }
      return brandDB;
    })

    return brandDB;
  }

  remove(id: string) {
   return this.brands.filter( brand => brand.id != id )
  }

  fillbrandsSeedData(brans: Brand[]){
    this.brands = brans;
  }

}
