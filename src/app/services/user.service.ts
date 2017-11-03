import {Injectable} from '@angular/core';
import {User} from "../models/models";


export interface LoginService{
  getUserId():number;
}


@Injectable()
export class LoginServiceImpl implements LoginService{

  logged:User;

  getUserId(){
    return 12;
  }

}


@Injectable()
  export class FakeLoginService extends LoginServiceImpl{

  getUserId(){
    return 55;
  }

}


