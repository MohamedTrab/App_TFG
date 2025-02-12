import { Controller } from '@nestjs/common';
import { ArticleService } from './article.service';

/**
 * post 
 * get all
 * get by id
 * delete 
 * update
 * 
 */

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}


}
