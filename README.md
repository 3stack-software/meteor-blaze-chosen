blaze-chosen
--------------------------

Wraps `eskan:chosen`, so you can just `{{#chosen}}<select />{{/chosen}}` and be done with it.

Usage
================

```
meteor add 3stack:blaze-chosen
```

Example
================


```handlebars
<div class="form-group">
  <label for="timezone">Timezone</label>
  {{#chosen}}
    <select name="tz" id="tz" class="form-control chosen-select">
      {{#each timezones}}
        <option value="{{tz}}" {{op ../selectedTz 'eq' tz selected=true}}>{{label}}</option>
      {{/each}}
    </select>
  {{/chosen}}
</div>
```

Pass options just like:

```
{{#chosen  disable_search_threshold=1}} {{! ... }} {{/chosen}}
```
