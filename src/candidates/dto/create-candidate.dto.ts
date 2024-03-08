import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCandidateDto {
    @ApiProperty({
        example: 'Georges katiera Amos',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    nom_complet: string;

    @ApiProperty({
        example: 'Ex: Aisha',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    nom_mere: string;

    @ApiProperty({
        example: 'Ex: 1996/04/02',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    date_naissance: Date

    @ApiProperty({
        example: 'ici on passe id selectionnez du pays',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    nationalite: string

    @ApiProperty({
        example: 'HOMME = 1,FEMME = 2',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    genre: genre

    @ApiProperty({
        example: ' MARRIER = 1,CELIBATAIRE = 2',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    status_matrimonial: statusMatrimoial

    @ApiProperty({
        example: ' MUSLIM = 1,CHRISTIAN = 2, BUDHA=3',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    religion: religion

    @ApiProperty({
        example: 'Lieux de naissance ex:burundi,bujumbura',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    lieux_naissance: string

    @ApiProperty({
        example: 'Nombre enfant',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    nombre_enfant: string

    @ApiProperty({
        example: 'Adresse actuel adress',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    adresse: string

    @ApiProperty({
        example: 'PRIMARY = 1,SECONDARY = 2,UNIVERSITY = 3,MASTER = 4 ',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    education: education

    @ApiProperty({
        example: 'Numero de telephone',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    telephone: string

    @ApiProperty({
        example: 'Language parle ou ecrit',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    language: language

    @ApiProperty({
        example: 'Experience vecus',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    experience: experience



    @ApiProperty({
        example: 'Photo envoyer en base 64',
        // required: true
    })
    @IsString()
    @IsNotEmpty()
    photo: string
}

export enum genre {
    HOMME = '1',
    FEMME = '2'
}


export enum statusMatrimoial {
    MARRIER = '1',
    CELIBATAIRE = '2'
}

export enum religion {
    MUSLIM = '1',
    CHRISTIAN = '2',
    BUDHA = '3'
}

export enum education {
    PRIMARY = '1',
    SECONDARY = '2',
    UNIVERSITY = '3',
    MASTER = '4'
}

export enum experience {
    WASHING = '1',
    CLEANING = '2',
    IRONING = '3',
    COOKING = '4',
    BABYSITING = '3'
}

export enum language {
    ENGLISH = '1',
    FRENCH = '2',
    ARABIC = '3',
    SWAHILI = '4'
}
