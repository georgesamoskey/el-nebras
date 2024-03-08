import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CandidatesModule } from './candidates/candidates.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://georgeskatiera:%40matrix007@cluster0.zslcnvn.mongodb.net/UNISOFT-EL-NEBRAS?retryWrites=true&w=majority`),
    CandidatesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
