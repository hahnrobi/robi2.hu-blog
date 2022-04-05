import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class SpotifyService {
    // TODO: These will be moved to env variables.
    private readonly apiUrl = "https://api.spotify.com/v1";
    private readonly token = "";
    private readonly userId = "11125460307"

    constructor(private httpService: HttpService) {

    }
    getPlaylist(): any {
        return this.httpService.get(this.apiUrl + "/users/" + this.userId + "/playlists", {
            headers: { Authorization: `Bearer ${this.token}` }
        });
    }
}
