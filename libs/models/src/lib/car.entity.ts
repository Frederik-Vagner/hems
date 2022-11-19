import { CompletedAt } from "./base.entity";
import { ApiModelProperty } from "@nestjs/swagger/dist/decorators/api-model-property.decorator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ICar, Location } from "@hems/interfaces";



@Entity('cars')
export class Car extends CompletedAt implements ICar {
    @ApiModelProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
    @PrimaryGeneratedColumn('uuid')
    carId!: string;

    @ApiModelProperty ({ example: '2345'})
    @Column ({ length: 254 })
    tagNr!: string;

    @ApiModelProperty ({ example: '211'})
    @Column ({ length: 254 })
    room!: string;

    @ApiModelProperty ({ example: '04/06/2022'})
    @Column ({ length: 254 })
    arrivialDate!: Date;

    @ApiModelProperty ({ example: '08/06/2022'})
    @Column ({ length: 254 })
    departureDate!: Date;

    @ApiModelProperty ({ example: 'madsen'})
    @Column ({ length: 254 })
    name!: string;

    @ApiModelProperty ({ example: 'AB60789'})
    @Column ({ length: 254 })
    licensePlate!: string;

    @ApiModelProperty ({ example: '01/04/2022 - 16:40'})
    @Column ({ length: 254 })
    expirationDate?: Date;

    @ApiModelProperty ({ example: '9:00 / RN = Call Down'})
    @Column ({ length: 254 })
    pickupTime?: Date;

    @ApiModelProperty ({ example: '02/04/2022 - 9:15'})
    @Column ({ length: 254 })
    deliveryTime?: Date;

    @ApiModelProperty ({ example: 'fv'})
    @Column ({ length: 254 })
    bbDown?: string;

    @ApiModelProperty ({ example: 'fv'})
    @Column ({ length: 254 })
    bbUp?: string;

    @ApiModelProperty ({ example: Location.FH_FRONT_HOTEL})
    @Column ({ type: 'enum', enum: Location, default: Location.PARKING_LOT_A })
    location!: Location;

    @ApiModelProperty ({ example: 'c102'})
    @Column ({ length: 254 })
    parkingLot?: string;

    @ApiModelProperty ({ example: 'luxurious car'})
    @Column ({ length: 254 })
    comments!: string;

    @ApiModelProperty ({ example: 'yes/no'})
    @Column ({ length: 254 })
    charged!: boolean;

    @ApiModelProperty ({ example: '02/04/2022 - 9:15'})
    @Column ({ length: 254 })
    completedAt?: Date;

    @ApiModelProperty ({ example: '02/04/2022 - 9:15'})
    @Column ({ length: 254 })
    createdAt!: Date;
}
