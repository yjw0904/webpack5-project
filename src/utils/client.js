const URL = 'https://my-json-server.typicode.com/yjw0904/demo/'

export async function get({ endpoint, headers = {} }) {
  try {
    const res = await fetch(`${URL}/${endpoint}`, {
      headers,
      method: 'GET',
    })
    if (res.status === 404) {
      console.error({ status: res.status, message: res.statusText })
      return {
        success: false,
        message: 'There was a server error',
      }
    } else {
      const json = await res.json()
      return { success: true, json }
    }
  } catch (error) {
    console.error({
      message: error.message,
    })
    return {
      success: false,
      message: error.message || 'There was a sever error',
    }
  }
}
