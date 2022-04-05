import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SpotifyService } from './spotify.service';
import { SpotifyController } from './spotify.controller';

@Module({
  providers: [SpotifyService],
  imports: [HttpModule],
  controllers: [SpotifyController]
})
export class SpotifyModule {}
