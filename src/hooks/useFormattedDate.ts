import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

function useFormattedDate(date: Date) {
  const dateI = new Date(date)
  if (!dateI) {
    return {
      dateFormatted: '',
      dateRelativeToNow: '',
    }
  } else {
    return {
      dateFormatted: format(dateI, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
      }),
      dateRelativeToNow: formatDistanceToNow(dateI, {
        locale: ptBR,
        addSuffix: true,
      }),
    }
  }
}

export default useFormattedDate
