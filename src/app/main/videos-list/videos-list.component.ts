import { Component, Input, Output, EventEmitter } from '@angular/core';
import { YoutubePlayerService } from '../../_services/services/youtube-player.service';
import { PlaylistStoreService } from '../../_services/services/playlist-store.service';

@Component({
  selector: 'videos-list',
  templateUrl: 'videos-list.component.html',
  styleUrls: ['videos-list.component.css']
})

export class VideosListComponent {
  @Input() videoList;
  @Input() loadingInProgress;
  @Output() videoPlaylist = new EventEmitter();

  constructor(
    private youtubePlayer: YoutubePlayerService,
    private playlistService: PlaylistStoreService
  ) { }

  play(video: any): void {
    this.youtubePlayer.playVideo(video.id, video.snippet.title);
    this.addToPlaylist(video);
  }

  addToPlaylist(video: any): void {
    this.videoPlaylist.emit(video);
  }
}
