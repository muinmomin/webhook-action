# webhook-action

Send a POST request to trigger any webhook

## Inputs

### `url`

**Required**: URL of webhook to send post request to.

### `data`

Optional: JSON string of data to pass into request. Default `"{}"`.


## Example usage

```yaml
uses: muinmomin/webhook-action@v1
with:
  url: ${{ secrets.WEBHOOK_URL }}
  data: "{'command': 'publish'}"
```
