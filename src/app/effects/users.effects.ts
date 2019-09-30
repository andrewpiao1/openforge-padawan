import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { UsersService } from '../services/users.service'
import * as UserActions from '../redux/users.action'

@Injectable()
export class UserEffects {
    constructor(private actions: Actions, private userService: UsersService) { }

    @Effect()
    loadData = this.actions.pipe(
        ofType(UserActions.ActionTypes.LoadDataBegin),
        switchMap(() => {
            return this.userService.loadData().pipe(
                map(data => new UserActions.LoadDataSuccess({ data: data })),
                catchError(error =>
                    of(new UserActions.LoadDataFailure({ error: error }))
                )
            );
        })
    );
}