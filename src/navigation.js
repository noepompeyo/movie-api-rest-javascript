import { getMoviesBySeach, getCategoriesPreview, getTrendingMoviesPreview, getMoviesByCategory, getTrendingMoviesTrending, getMovieById } from "./main.js";

searchFormBtn.addEventListener('click' , () => {
    
    location.hash = '#search=' + searchFormInput.value;
});
trendingBtn.addEventListener('click' , () => {
    location.hash = '#trends';
});
arrowBtn.addEventListener('click', () => {
    history.back();
        // location.hash = '#';
})

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    console.log({location});
    if (location.hash.startsWith('#trends')) {
       trendsPage();
    } else if (location.hash.startsWith('#search=')) {
        searchPage();
    } else if (location.hash.startsWith('#movie=')) {
        movieDetailsPage();
    }  else if (location.hash.startsWith('#category=')) {
        categoriesPage();
    } else {
        homePage();
    }

    document.documentElement.scrollTop= 0;    
    document.body.scrollTop= 0;    
}

function homePage() {
    console.log('!home');
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    headerTitle.classList.remove('inactive')
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoríasPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive')
    movieDetailSection.classList.add('inactive')
    getTrendingMoviesPreview()
    getCategoriesPreview()
}
function categoriesPage() {
    console.log('category!!');
    headerSection.classList.remove('header-container--long');
    // headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoríasPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')
// ['#category', 'id-name']
    const [_, categoriInfo] = location.hash.split('=');
    const [categoryId, categoriName] = categoriInfo.split('-');  
    getMoviesByCategory(categoryId);
    headerCategoryTitle.innerHTML = categoriName;
}
function movieDetailsPage() {
    console.log('movie!!');
   
    headerSection.classList.add('header-container--long');
    // headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoríasPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive')
    movieDetailSection.classList.remove('inactive')

        // ['#category', 'id-movie']
    const [_, movieId] = location.hash.split('=');
    getMovieById(movieId);
}
function searchPage() {
    console.log('Search!!');
    
    headerSection.classList.remove('header-container--long');
    // headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoríasPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')

    // ['#serach', 'id-buscado']
    const [_, query] = location.hash.split('=');
    getMoviesBySeach(query);
}
function trendsPage() {
    console.log('!trends');
    headerSection.classList.remove('header-container--long');
    // headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoríasPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')

    headerCategoryTitle.innerHTML = 'Tendencias';
    
    getTrendingMoviesTrending()
}

