import axios from 'axios'
import { useEffect, useState } from 'react'

const imageUrl =
  'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&nc=1612409408851&pid=hp&FORM=BEHPTB&uhd=1&uhdwidth=3840&uhdheight=2160&mkt=zh-CN'

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.78'

const BASE_URL = 'https://cn.bing.com'

const DEFAULT_IMG =
  'https://cn.bing.com/th?id=OHR.YearRabbit_ZH-CN2751166096_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=1920&h=1080&rs=1&c=4'

const LOCAL_BACK = 'local_back'

export default function useBackground() {
  const [backgroundUrl, setBackgroundUrl] = useState(
    localStorage.getItem(LOCAL_BACK) || DEFAULT_IMG
  )
  useEffect(() => {
    axios({
      url: imageUrl,
      method: 'GET',
      headers: {
        'User-Agent': UA,
      },
    }).then((res) => {
      const { images } = res.data
      if (images && images.length) {
        const image = BASE_URL + images[0]
        setBackgroundUrl(image)
        localStorage.setItem(LOCAL_BACK, image)
      }
    })
  }, [])

  return { backgroundUrl }
}