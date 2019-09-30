import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { UsersService } from '../services/users.service'
import * as UserActions from '../redux/users.action'


// ---- NgRx 4: Effect to trigger when LoadDataBegin action is dispatched

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

    // @Effect()
    // loadUserData = this.actions.pipe(
    //     ofType<UserActions.LoadUserData>(UserActions.ActionTypes.LoadUserData),
    //     switchMap((action) => {
    //         return this.userService.loadUserData(action.payload).pipe(
    //             map((user) => new UserActions.LoadDataSuccess({ data: user })),
    //             catchError(error =>
    //                 of(new UserActions.LoadDataFailure({ error: error }))
    //             )
    //         )
    //     })
    // )

    // @Effect()
    // loadUserData = this.actions.pipe(
    //     ofType<UserActions.LoadUserData>(UserActions.ActionTypes.LoadUserData),
    //     switchMap((action) => {
    //         console.log('users effects', action);
    //         return this.userService.loadUserData(action.payload).pipe(
    //             map((data) => new UserActions.LoadUserDataSuccess({ data: data }))
    //         )
    //     })
    // )

}