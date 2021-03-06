---
template: reference
foo: bar
---

# Extending Schema

```
https://example.com/schemas/extending
```

This is an extending schema. It pulls `definitions` from other schemas.

| [Abstract](../abstract.md) | Extensible | [Status](../status.md) | Custom Properties | Additional Properties | Defined In |
|----------------------------|------------|------------------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | Forbidden | Permitted | [extending.schema.json](extending.schema.json) |
## Schema Hierarchy

* Extending `https://example.com/schemas/extending`
  * [Extensible](extensible.schema.md) `https://example.com/schemas/extensible`
  * [Definitions](definitions.schema.md) `https://example.com/schemas/definitions`


# Extending Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `string` | Optional | [Definitions](definitions.schema.md#@id) |
| [bar](#bar) | `string` | Optional | [Extensible](extensible.schema.md#bar) |
| [baz](#baz) | `string` | Optional | Extending (this schema) |
| [id](#id) | `string` | Optional | [Definitions](definitions.schema.md#id) |
| [meta:id](#metaid) | `string` | Optional | [Definitions](definitions.schema.md#metaid) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

An `id` with an `@` in front of it. The `@` stands for "dot com"

`@id`
* is optional
* type: `string`
* defined in [Definitions](definitions.schema.md#@id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## bar

A horse walks into it.

`bar`
* is optional
* type: `string`
* defined in [Extensible](extensible.schema.md#bar)

### bar Type


`string`





### bar Examples

```json
"whoo"
```

```json
"hoo"
```



## baz
### BAAAZ!

This property has a unique name to demonstrate it's uniqueness.

`baz`
* is optional
* type: `string`
* defined in this schema

### baz Type


`string`





### baz Example

```json
"I'm just a humble example"
```


## id

A unique identifier given to every addressable thing.

`id`
* is optional
* type: `string`
* defined in [Definitions](definitions.schema.md#id)

### id Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## meta:id

An about ids. It is meta. If you are confused, send an email to the address specified in this property value.

`meta:id`
* is optional
* type: `string`
* defined in [Definitions](definitions.schema.md#meta:id)

### meta:id Type


`string`
* format: `email` – email address (according to [RFC 5322, section 3.4.1](https://tools.ietf.org/html/rfc5322))





