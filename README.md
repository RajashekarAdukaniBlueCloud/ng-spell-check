Angular Spell Check Library
=========

This spell checker will use api to check for spelling errors and provide suggestions to correct your spell mistaking. 

### Install
`npm i ng-spell-check`

### Usage
In you `app.module.ts` import it using `@NgModule` decorator.

    @NgModule({
        imports: [
            ...,
            SpellCheckModule,
            ...
        ]
    })

Now you can use spell check in your html code.

    <ng-spell-check></ng-spell-check>

### Note

This is a work in progress. There are a lot of items to do right now. It basically provides features to only correct text you entered in the field. 