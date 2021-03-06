import { async, TestBed } from '@angular/core/testing';
import { User } from './user';
import { SharedService } from '../../services/shared.service';

beforeEach(() => {

});

afterEach(() => {
  Object.keys(localStorage).forEach(key => {
    delete localStorage[key];
  });
});

describe('User', () => {
  describe('import', () => {
    it('should be able to import', () => {
      User.import(JSON.stringify({
        realm: 'test-realm',
        region: 'us',
        buyoutLimit: 300
      }));

      expect(localStorage['crafting_buyout_limit']).toEqual('300');
      expect(SharedService.user.buyoutLimit).toEqual(300);
    });
  });

  describe('restore', () => {
    it('Should accept work only if just region and realm are set', () => {
      localStorage['realm'] = 'test-realm';
      localStorage['region'] = 'eu';
      User.restore();
      expect(SharedService.user.realm).toEqual('test-realm');
      expect(SharedService.user.region).toEqual('eu');
    });

    it('Has default values', () => {
      User.restore();
      expect(SharedService.user.buyoutLimit).toEqual(200);
    });

    it('Can override default values', () => {
      localStorage['crafting_buyout_limit'] = '300';
      User.restore();
      expect(SharedService.user.buyoutLimit).toEqual(300);
    });
  });
});
