angular.module('Project-List', [
  ])
  .controller('MainCtrl', function($scope){

    $scope.projects = [
      {id: 0, 
       title: 'Project List', 
       description: 'A static site hosted on CF and versioned on GitHub', 
       link: 'https://github.com/franciscohui/project-list', 
       phase: 'Started'
      },
    ]; // $scope.projects

    $scope.ideas = [
      {id: 0,
       description: 'A way to analyze the grid system in Bootstrap, and compare it to PivUI',
       tag: 'Design'
      },
      {id: 0,
       description: 'A place to share the learnings from a book: summary, highlights, application of concepts',
       tag: 'Reading'
      },
      {id: 0,
       description: 'A place to share highlights and summary from an article',
       tag: 'Reading'
      },
      {id: 0,
       description: 'A place to share interesting links I come across with comments on it',
       tag: 'Reading'
      },
    ]; // $scope.ideas

  }) //.controller
; // .module Project-List