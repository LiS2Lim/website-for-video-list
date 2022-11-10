from django import template
register = template.Library()

@register.filter('target')
def reportkey(dic, key):
    if key in dic:
        return dic.get(key)