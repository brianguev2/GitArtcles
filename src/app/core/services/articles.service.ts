import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Article,  } from '../models';
import { map } from 'rxjs/operators';
import { ArticleListConfig } from '../models/article-list-config.model';

@Injectable()
export class ArticlesService {
  constructor(
    private apiService: ApiService
  ) {}

  query(config: ArticleListConfig): Observable<{articles: Article[], articlesCount: number}> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};

    Object.keys(config.filters)
    .forEach((key) => {
      params[key] = config.filters[key];
    });

    return this.apiService
    .get(
      '/articles' + ((config.type === 'feed') ? '/feed' : ''),
      new HttpParams({ fromObject: params })
    );
  }

  get(slug): Observable<Article> {
    return this.apiService.get('/article/' + slug)
      .pipe(map(data => data.article));
  }

  destroy(slug) {
    return this.apiService.delete('/articles/' + slug);
  }

  save(article): Observable<Article> {
    // If we're updating an existing article
    if (article.slug) {
      return this.apiService.put('/article/' + article.slug, {article: article})
      .pipe(map(data => data.article));

      // Otherwise create a new article
    } else {
      return this.apiService.post('/article/', { article: article})
      .pipe(map(data => data.article));
    }
}

favorite(slug): Observable<Article> {
  return this.apiService.post('/articles/' + slug + '/favorite');
}

unfavorite(slug): Observable<Article> {
  return this.apiService.delete('/articles/' + slug + '/favorite');
}
}