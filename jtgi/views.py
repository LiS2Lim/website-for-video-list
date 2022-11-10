from django.shortcuts import render
from .models import Videolist
from .languageset import languageset


def top(request):
    event = Videolist.objects.filter(language_fk='kr', is02event='1')[:4]
    food = Videolist.objects.filter(language_fk='kr', is04food='1')[:4]
    city = Videolist.objects.filter(language_fk='kr', is09city='1')[:4]
    reco = Videolist.objects.filter(language_fk='kr', is07recommend='1')[:4]
    kr = "true"
    lang = languageset["kr"]["top"]
    return render(request, 'jtgi/jtgi.html', {'event': event,
                                              'food': food,
                                              'city': city,
                                              'reco': reco,
                                              'lang': lang,
                                              'kr': kr})


def level1(request, str1):
    if str1 in ["trend", "event", "shock", "food", "interest", "howtotravel", "recommend", "travelersuggestion", "city"]:
        if str1 == "trend":
            context = Videolist.objects.filter(language_fk='kr', is01trend='1')
        elif str1 == "event":
            context = Videolist.objects.filter(language_fk='kr', is02event='1')
        elif str1 == "shock":
            context = Videolist.objects.filter(language_fk='kr', is03shock='1')
        elif str1 == "food":
            context = Videolist.objects.filter(language_fk='kr', is04food='1')
        elif str1 == "interest":
            context = Videolist.objects.filter(language_fk='kr', is05interest='1')
        elif str1 == "howtotravel":
            context = Videolist.objects.filter(language_fk='kr', is06howto='1')
        elif str1 == "recommend":
            context = Videolist.objects.filter(language_fk='kr', is07recommend='1')
        elif str1 == "travelersuggestion":
            context = Videolist.objects.filter(language_fk='kr', is08suggested='1')
        elif str1 == "city":
            context = Videolist.objects.filter(language_fk='kr', is09city='1')

        lang = languageset["kr"]["top"]
        url = '/'
        ptype = languageset["kr"]["top"][str1]
        return render(request, 'jtgi/type_videolist.html', {'context': context,
                                                            'lang': lang,
                                                            'url': url,
                                                            'ptype': ptype})

    elif str1 in ["commonsense", "citymap"]:
        lang = languageset["kr"]["top"]
        url = '/'
        ptype = languageset["kr"]["top"][str1]
        return render(request, 'jtgi/404.html', {'lang': lang,
                                                 'url': url,
                                                 'ptype': ptype})

    elif str1 in ["en", "jp", "cn", "tw"]:
        event = Videolist.objects.filter(language_fk=str1, is02event='1')[:4]
        food = Videolist.objects.filter(language_fk=str1, is04food='1')[:4]
        city = Videolist.objects.filter(language_fk=str1, is09city='1')[:4]
        reco = Videolist.objects.filter(language_fk=str1, is07recommend='1')[:4]

        lang = languageset[str1]["top"]
        url = '/' + str1 + '/'
        return render(request, 'jtgi/jtgi.html', {'event': event,
                                                  'food': food,
                                                  'city': city,
                                                  'reco': reco,
                                                  'lang': lang,
                                                  'url': url})
    else:
        return render(request,'jtgi/404.html')


def level2(request, str1, str2):
    lang = languageset[str1]["top"]
    url = '/' + str1 + '/'
    ptype = languageset[str1]["top"][str2]

    if str1 in ["en", "jp", "cn", "tw"]:
        if str2 == "trend":
            context = Videolist.objects.filter(language_fk=str1, is01trend='1')
        elif str2 == "event":
            context = Videolist.objects.filter(language_fk=str1, is02event='1')
        elif str2 == "shock":
            context = Videolist.objects.filter(language_fk=str1, is03shock='1')
        elif str2 == "food":
            context = Videolist.objects.filter(language_fk=str1, is04food='1')
        elif str2 == "interest":
            context = Videolist.objects.filter(language_fk=str1, is05interest='1')
        elif str2 == "howtotravel":
            context = Videolist.objects.filter(language_fk=str1, is06howto='1')
        elif str2 == "recommend":
            context = Videolist.objects.filter(language_fk=str1, is07recommend='1')
        elif str2 == "travelersuggestion":
            context = Videolist.objects.filter(language_fk=str1, is08suggested='1')
        elif str2 == "city":
            context = Videolist.objects.filter(language_fk=str1, is09city='1')
        else:
            return render(request, 'jtgi/404.html', {'lang': lang,
                                                     'url': url,
                                                     'ptype': ptype})
    else:
        return render(request, 'jtgi/404.html', {'lang': lang,
                                                 'url': url,
                                                 'ptype': ptype})

    return render(request, 'jtgi/type_videolist.html', {'context': context,
                                                        'lang': lang,
                                                        'url': url,
                                                        'ptype': ptype})


def nopage(request):
    return render(request, 'jtgi/404.html')
