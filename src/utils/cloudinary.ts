const CLOUDINARY_BASE_URL =
  "https://res.cloudinary.com/anthony-jeamme-stuff/image/upload"

export type TGetPictureURLParams = {
  w?: number
  h?: number
  c?: "fill" | "limit"
  q?: "auto" | number
  f?: "auto" | "jpg"
  format?: "jpeg" | "png"
}

const defaultParams: TGetPictureURLParams = {
  f: "auto",
  q: "auto",
}

export const isBrowser = () => typeof window !== "undefined"

const generateCloudinaryURLParamsString = (params: TGetPictureURLParams) => {
  const list = []

  if (!isBrowser()) return ""

  Object.keys(params).forEach(key => {
    const value = params[key]

    if (["w", "h"].includes(key)) {
      list.push(`${key}_${Math.ceil(value * window.devicePixelRatio)}`)
    } else {
      if (value !== null) list.push(`${key}_${value}`)
    }
  })

  return list.join(",")
}

export const getCloudinaryURL = (public_id, params: TGetPictureURLParams) => {
  const paramsString = generateCloudinaryURLParamsString({
    ...defaultParams,
    ...params,
  })
  return `${CLOUDINARY_BASE_URL}/${paramsString}/${public_id}`
}
