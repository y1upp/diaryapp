/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3165375535")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "bool4210582990",
    "name": "colour",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3165375535")

  // remove field
  collection.fields.removeById("bool4210582990")

  return app.save(collection)
})
