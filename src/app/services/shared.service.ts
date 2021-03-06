import { Injectable } from '@angular/core';
import { User } from '../models/user/user';
import { AuctionItem } from '../models/auction/auction-item';
import { Recipe } from '../models/crafting/recipe';
import { Item } from '../models/item/item';
import { TSM } from '../models/auction/tsm';
import { Auction } from '../models/auction/auction';
import { Realm } from '../models/realm';
import { Dashboard } from '../models/dashboard';
import { Pet } from '../models/pet';
import { AuctionResponse } from '../models/auction/auctions-response';
import { TradeVendor, TradeVendorItem, TradeVendorItemValue } from '../models/item/trade-vendor';
import { UserAuctions, UserAuctionCharacter } from '../models/auction/user-auctions';
import { CustomPrice } from '../models/crafting/custom-price';
import { Seller } from '../models/seller';
import { AuctionPet } from '../models/auction/auction-pet';
import { ShoppingCart } from '../models/shopping-cart';
import { Notification } from '../models/user/notification';
import { CustomProc } from '../models/crafting/custom-proc';

@Injectable()
export class SharedService {
  public static user: User;
  public static customPricesMap: Map<number, CustomPrice> = new Map<number, CustomPrice>();
  public static customProcsMap: Map<number, CustomProc> = new Map<number, CustomProc>();
  public static auctionResponse: AuctionResponse = {
    lastModified: parseInt(localStorage['timestamp_auctions'], 10), url: undefined};

  public static userAuctions: UserAuctions = new UserAuctions();
  public static sellersMap: Map<string, Seller> = new Map<string, Seller>();
  public static sellers: Array<Seller> = new Array<Seller>();

  public static auctionItemsMap: Map<number, AuctionItem> = new Map<number, AuctionItem>();
  public static auctionItems: Array<AuctionItem> = new Array<AuctionItem>();
  public static auctions: Array<Auction> = new Array<Auction>();
  public static tsm: Map<number, TSM> = new Map<number, TSM>();

  public static recipesForUser: Map<number, Array<string>> = new Map<number, Array<string>>();
  public static recipes: Array<Recipe> = new Array<Recipe>();
  public static recipesMap: Map<number, Recipe> = new Map<number, Recipe>();
  public static recipesMapPerItemKnown: Map<number, Recipe> = new Map<number, Recipe>();
  public static itemRecipeMap: Map<number, Array<Recipe>> = new Map<number, Array<Recipe>>();

  public static items: Map<number, Item> = new Map<number, Item>();
  public static itemsUnmapped: Array<Item> = new Array<Item>();
  public static tradeVendorItemMap: Map<number, TradeVendorItemValue> = new Map<number, TradeVendorItemValue>();
  public static tradeVendorMap: Map<number, TradeVendor> = new Map<number, TradeVendor>();

  public static pets: Map<number, Pet> = new Map<number, Pet>();

  public static realms: Map<string, Realm> = new Map<string, Realm>();

  public static selectedItemId: number;
  public static selectedPetSpeciesId: AuctionPet;
  public static selectedSeller: Seller;


  public static itemDashboards: Array<Dashboard> = new Array<Dashboard>();
  public static sellerDashboards: Array<Dashboard> = new Array<Dashboard>();

  public static notifications: Array<Notification> = new Array<Notification>();

  public static downloading = {
    auctions: false,
    tsmAuctions: false,
    items: false,
    pets: false,
    recipes: false,
    characterData: false
  };

  /* istanbul ignore next */
  public static isDownloading(): boolean {
    return SharedService.downloading.auctions ||
      SharedService.downloading.tsmAuctions ||
      SharedService.downloading.items ||
      SharedService.downloading.pets ||
      SharedService.downloading.recipes ||
      SharedService.downloading.characterData;
  }
}
