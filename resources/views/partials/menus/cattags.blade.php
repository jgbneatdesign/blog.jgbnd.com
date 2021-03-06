<li class="uk-nav-header">Categories</li>
<li ng-repeat="category in blog.categories | orderBy:'term.name'">
    <a href="category/@{{ category.term.slug }}">
        <i class="uk-icon-folder-open"></i>
        @{{ category.term.name }} (@{{ category.count }})
    </a>
</li>

<li class="uk-nav-divider"></li>

<li class="uk-nav-header">Tags</li>
<li ng-repeat="tag in blog.tags | orderBy:'term.name'">
    <a href="tag/@{{ tag.term.slug }}">
        <i class="uk-icon-tag"></i>
        @{{ tag.term.name }} (@{{ tag.count }})
    </a>
</li>