import { Test, TestingModule } from '@nestjs/testing';
import { mockFindAll, user1, userUpdate } from './mock/user.mock';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            create: jest.fn().mockResolvedValue(user1),
            findAll: jest.fn().mockResolvedValue(mockFindAll),
            findOne: jest.fn().mockResolvedValue(mockFindAll),
            update: jest.fn().mockResolvedValue(userUpdate),
            remove: jest.fn().mockResolvedValue(mockFindAll),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('Create Clients', () => {
    it('Should be create new client', async () => {
      const result = await controller.create(user1);
      expect(result).toEqual(user1);
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
      const result = await controller.update('1', userUpdate);
      expect(result).toEqual(userUpdate);
    });
  });

  // describe('Delete Clients ', () => {
  //   it('Should delete client by id', async () => {
  //     const result = await controller.remove('4');
  //     expect(result[4]).toEqual(undefined);
  //   });
  // });
});
