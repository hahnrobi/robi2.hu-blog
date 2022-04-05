import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class SpotifyService {
    // TODO: These will be moved to env variables.
    private readonly apiUrl = "https://api.spotify.com/v1";
    private readonly token = "AQCR4iBfpzN0LmfxOkGvcmha84WVLGzmGM2QWL7ClfOn7WE8jL_sCVWXxH2ENAK9ApzW8a6XgiqQ5L1YY9tztwjJaL5NGCO36aur_aENiNei1Qf-IgkAWLeR8UjsVTAG72eEt1E2YT0xit_wTp5tjJZJQmqBZwFTtS0JaTQq_5ShZnECQVtQFfXNTA8TfQZWOw";
    private readonly userId = "11125460307"

    constructor(private httpService: HttpService) {

    }
    getPlaylist(): any {
        return this.httpService.get(this.apiUrl + "/users/" + this.userId + "/playlists", {
            headers: { Authorization: `Bearer ${this.token}` }
        });
    }
}
