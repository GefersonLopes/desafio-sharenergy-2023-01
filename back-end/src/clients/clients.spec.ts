import { Test, TestingModule } from '@nestjs/testing';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { client1, clientUpdate, mockFindAll } from './mock/client.mock';

describe('ClientsController', () => {
  let controller: ClientsController;
  let service: ClientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientsController],
      providers: [
        {
          provide: ClientsService,
          useValue: {
            create: jest.fn().mockResolvedValue(client1),
            findAll: jest.fn().mockResolvedValue(mockFindAll),
            findOne: jest.fn().mockResolvedValue(mockFindAll),
            update: jest.fn().mockResolvedValue(clientUpdate),
            remove: jest.fn().mockResolvedValue(mockFindAll),
          },
        },
      ],
    }).compile();

    controller = module.get<ClientsController>(ClientsController);
    service = module.get<ClientsService>(ClientsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('Create Clients', () => {
    it('Should be create new client', async () => {
      const result = await controller.create(client1);
      expect(result).toEqual(client1);
    });
  });

  describe('List Clients', () => {
    it('Should be list all clients', async () => {
      const result = await controller.findAll();
      expect(result).toEqual(mockFindAll);
    });
  });

  describe('Get Clients By Id', () => {
    it('Should get client by id', async () => {
      const result = await controller.findOne('1');
      expect(result[0]).toEqual(mockFindAll[0]);
    });
  });

  describe('Update Clients ', () => {
    it('Should update client by id', async () => {
      const result = await controller.update('1', clientUpdate);
      expect(result).toEqual(clientUpdate);
    });
  });

  // describe('Delete Clients ', () => {
  //   it('Should delete client by id', async () => {
  //     const result = await controller.remove('4');
  //     expect(result[4]).toEqual(undefined);
  //   });
  // });
});
