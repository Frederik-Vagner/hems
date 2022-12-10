import { IBike } from '@hems/interfaces'

export const bikes: IBike[] = [
    {
        bikeId: '0aea1d21-c862-44fc-92b7-b8c87db76dac',
        numberOfBikes: '1',
        pickUpTime: new Date(
            new Date('10/12/2022').setHours(
              Math.random() * (23 - 2) + 2,
              Math.random() * (59 - 1) + 1
            )
          ),
        name: 'James',
        room: '211',
        reservedBy: 'Guest',
        bikeForm: true,
        returned: new Date(
            new Date('10/12/2022').setHours(
              Math.random() * (23 - 2) + 2,
              Math.random() * (59 - 1) + 1
            )
          ),
        comments: 'Prepare bike helmet', 
        completedAt: new Date(
            new Date('10/12/2022').setHours(
              Math.random() * (23 - 2) + 2,
              Math.random() * (59 - 1) + 1
            )
          ),
          createdAt: new Date(
            new Date('10/12/2022').setHours(
              Math.random() * (23 - 2) + 2,
              Math.random() * (59 - 1) + 1
            )
          ),
    }
]
