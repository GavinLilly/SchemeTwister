import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromNumPlayers from './+state/num-players.reducer';
import { NumPlayersEffects } from './+state/num-players.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromNumPlayers.NUMPLAYERS_FEATURE_KEY,
      fromNumPlayers.reducer
    ),
    EffectsModule.forFeature([NumPlayersEffects]),
  ],
})
export class WebAppDataAccessNumPlayersModule {}
