import styled from 'styled-components/native'

const getStylesFromString = (shorthandString: string) => {
  const styles = {
    padding: {
      'p': 'padding',
      'pt': 'padding-top',
      'pb': 'padding-bottom',
      'pl': 'padding-left',
      'pr': 'padding-right',
      'px': ['padding-left', 'padding-right'],
      'py': ['padding-top', 'padding-bottom']
    },
    margin: {
      'm': 'margin',
      'mt': 'margin-top',
      'mb': 'margin-bottom',
      'ml': 'margin-left',
      'mr': 'margin-right',
      'mx': ['margin-left', 'margin-right'],
      'my': ['margin-top', 'margin-bottom']
    },
    width: {
      'w': 'width'
    },
    height: {
      'h': 'height'
    },
    'align-items': {
      'items-center': 'center',
      'items-left': 'flex-start',
      'items-right': 'flex-end'
    },
    position: {
      'position-relative': 'relative',
      'position-fixed': 'fixed',
      'position-absolute': 'absolute'
    }
  }

  const getStyle = (styleString: string) => {
    const styleArray = styleString.split(' ')
    let result = ''

    styleArray.forEach((style: any) => {
      let [key, value] = style.split('-')
      let found = false

      for (const category in styles) {
        if ((styles as any)[category].hasOwnProperty(key)) {
          const styleValue = (styles as any)[category][key]
          if (Array.isArray(styleValue)) {
            styleValue.forEach(val => {
              result += `${val}: ${value} `
            })
          } else {
            result += `${styleValue}: ${value} `
          }
          found = true
          break
        } else if ((styles as any)[category].hasOwnProperty(style)) {
          result += `${category}: ${(styles as any)[category][style]} `
          found = true
          break
        }
      }
    })

    return result.trim()
  }

  return getStyle(shorthandString)

}

export const StyledContainer = styled.View<any>`${({ styles }) => getStylesFromString(styles)}`
