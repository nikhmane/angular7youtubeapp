import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';
import { HttpModule } from '@angular/http';
import { MainComponent } from './main';
import { VideosListComponent } from './main/videos-list/videos-list.component';
import { VideosSearchComponent } from './main/videos-search/videos-search.component';
import { VideoPlayerComponent } from './main/video-player/video-player.component';
import { VideosPlaylistComponent } from './main/videos-playlist/videos-playlist.component';
import { VideoDurationPipe } from './_services/pipes/video-duration.pipe';
import { VideoLikesViewsPipe } from './_services/pipes/video-likes-views.pipe';
import { VideoNamePipe } from './_services/pipes/video-name.pipe';
import { LazyScrollDirective } from './_services/directives/lazy-scroll/lazy-scroll.directive';
import { YoutubeApiService } from './_services/services/youtube-api.service';
import { YoutubePlayerService } from './_services/services/youtube-player.service';
import { PlaylistStoreService } from './_services/services/playlist-store.service';
import { NotificationService } from './_services/services/notification.service';
import { BrowserNotificationService } from './_services/services/browser-notification.service';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        HttpModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,
        MainComponent,
        VideosListComponent,
        VideosSearchComponent,
        VideoPlayerComponent,
        VideosPlaylistComponent,    
        VideoDurationPipe,
        VideoLikesViewsPipe,
        VideoNamePipe,
    
        LazyScrollDirective,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider,
        YoutubeApiService,
        YoutubePlayerService,
        PlaylistStoreService,
        NotificationService,
        BrowserNotificationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };