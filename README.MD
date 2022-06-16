# README DOCUMENTATION LINK
[README](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

# DATA TYPES
## Scalar Types
    - bool e.g true / false
    - int e.g 1, 2, 3, 0, -5
    - float / double e.g 0.3, -3.6
    - string e.g 'King', "Hello World"

## Compound Types
    - array e.g [1, 2, 3, 'A', 'B']
    - object
    - callable
    - iterable

## Special Types
    - resource
    - null

**NOTE:** Don't use echo to print arrays. Use _var_dump_ or _print_r_ methods.

### ADDING STRICT TO YOUR PHP FILE
declare(strict_types=1);

### IN_BUILT PHP CONSTANTS
    - PHP_VERSION, PHP_INT_MAX, PHP_INT_MIN, PHP_INT_SIZE, PHP_FLOAT_MAX, 
      PHP_FLOAT_MIN
**NOTE:** NAN => Not a number, INF => Infinity

### DIFFERENT TYPES OF INTEGER REPRESENTATIONS
    - binary e.g 0b11 => it starts with 0b e.g $x = 0b11
    - Hexadecimal e.g 0x2A => it starts with 0x  e.g $x = 0x2A
    - octal e.g 055 => it starts with 0  e.g $x = 055

### CHECKING DATA TYPES
    - is_int($x) => Check if $x is integer
    - is_bool($x) => Check if $x is boolean
    - is_infinite($x), is_finite($x), is_nan($x), is_null($x)
    - is_callable e.g function sum() { return 1;}; $x = 'sum'; if(is_callable($x)) {};

## Built-in web server
With PHP 5.4 or newer, you can start learning PHP without installing and 
configuring a full-fledged web server. To start the server, 
run the following command from your terminal in your project’s web root:

```php
 php -S localhost:8000
```
### USE MATH FUNCTIONS WITHOUT ATTACHING MATH TO IT
    - floor($x), min($x), max($x), ceil($x)

### STRINGS WITH Heredoc AND Nowdoc
    - Heredoc => It treats strings like they are enclosed in double quotes i.e ""
    - Nowdoc => It treats strings like they are enclosed in single quotes i.e ''.

**DIFFERENCE:** Nowdoc surrounds the identifier in single quote like 'TEXT' 
and it doesn't also evaluate variables.

Example Heredoc:
```php
$x = 5;
$y = 10;
 $text = <<<TEXT
    With PHP 5.4 or newer, you can start learning $x.
    PHP without installing $y. 
    configuring php with php.ini.
TEXT;

echo nl2br($text);
```
**NOTE:** nl2br($x) means new line to break. It adds a break point where there is a new line

Example Nowdoc:
```php
$x = 5;
$y = 10;

 $text = <<<'TEXT'
    With PHP 5.4 or newer, you can start learning $x.
    PHP without installing $y. 
    configuring php with php.ini.
TEXT;

echo nl2br($text);
```
### USING fdiv TO AVOID PHP THROWING AN ERROR WHEN DIVISION IS BY ZERO

Example:
```php
$x = 5;
$y = 0;

echo fdiv($x, $y); // Here the output will be float(INF)
```
### USING fmod FOR CALCULATING MODULUS OR REMAINDER OF A FLOATING NUMBER
Example:
```php
$x = 10.5;
$y = 2.9;

echo fmod($x, $y); // Here the output will be float(1.8000000000000003)
```

### ob_start() function
This is used to remember everything that needs to be outputted. It stores everything
after it in a buffer until ***ob_get_clean()*** is called e.g

Example:
```php
    ob_start();
    include './partials/nav.php';
    $nav = ob_get_clean();
    $nav = str_replace('About', 'About Us', $nav);
        
    echo $nav;
```
### USING VARIABLES FROM A GLOBAL SCOPE IN FUNCTIONS
Example:
```php
    $x = 5;

    function useValue() {
        global $x; // Used global keyword
        return $x;
    }

    // OR

    function useValue() {
        return $GLOBALS['x']; // Using $GLOBALS which is an array
    }
```

### USINGEXPRESSION TO STORE FUNCTION NAME

Example:
```php
function sum(int | float ...$numbers): int | float {
    return array_sum($numbers);
}

$x = 'sum';
echo $x(1, 2, 3); // 6
```

### USING GLOBAL VARIABLES IN AN ANONYMOUS FUNCTIONS WITH HELP OF use KEYWORD
**NOTE:** Always end anonymous functions with a semicolon.
Example:
```php
$x = 5;
function (int | float ...$numbers) use ($x): int | float {
    echo $x; // $x becomes accessible here 
    return array_sum($numbers);
};
```
### CHANGE TIMEZONE
```php
    date_default_timezone_set('UTC'); // set default timezone
    date_default_timezone_get(); // get default timezone
```
### ARRAY MAP OF MULTIPLE ARRAYS
Example:
```php
    $array1 = ['a' => 1, 'b' => 2, 'c' => 3];
    $array2 = ['d' => 4, 'e' => 5, 'f' => 6];

    $arrayProduct = array_map(fn($num1, $num2) => $num1 * $num2, $array1, $array2);
    
```

### SOME ARRAY FUNCTIONS
    - array_diff(), array_diff_assoc(), array_diff_key(), array_reduce(), array_map()
    - array_merge(), array_combine(), array_sum(), array_product()

### DESTRUCTURING ARRAY
Example:
```php
    $array1 = [1, 2, 3];
    list('a', 'b', 'c') = $array1;
    echo $a; // 1
    
    //OR
     ['a', 'b', 'c'] = $array1;
     echo $b; // 2
   
```
### CONFIGURING SOME BASIC php.ini CONFIGS DURING SCRIPT RUNTIME
Example:
```php
   ini_set('error_reporting', E_ALL & ~E_WARNING); // it shows all errors apart from warnings
        // OR
   error_reporting(E_ALL);
   
   var_dump(ini_get(E_ALL)); // It will display the string representation of E_ALL

    ini_set('display_errors', 1); // use during development 
    ini_set('display_errors', 0); // use during production
    
    ini_set('max_execution_time', 30); // sets 30s for script execution
    ini_set('memory_limit', 1024);  // setting memory limit for a script
```

### HANDLING ERREOR
Example:
```php

// First, create the error handling function
function errorHandler(
    int $type, string $message, 
    ?string $file = null, ?int $line = null
) {
    
    exit;
}

set_error_handler('errorHandler', E_ALL);
```
### OPENING http_vhosts file from xampp
1. Go through your xampp installation folder as shown below ***C:\xampp\apache\conf\extra\httpd-vhosts***.
Then click the file **httpd-vhosts** to open virtual host file. E.g
```php
##<VirtualHost *:80>
    ##ServerAdmin webmaster@dummy-host.example.com
    DocumentRoot "/xampp/htdocs/premier-vision"
    ServerName premier-vision
    ##ServerAlias www.dummy-host.example.com
    ##ErrorLog "logs/dummy-host.example.com-error.log"
    ##CustomLog "logs/dummy-host.example.com-access.log" common
##</VirtualHost>
```
2. Then go to ***C:\Windows\System32\drivers\etc/hosts***. Add the server name you created in the httpd-vhosts
file and at the end of the file, point it to an ip e.g
```php
127.0.0.1 premier-vision
```
**NOTE:** After changes to the above files, restart the server.

### FILESYSTEM
1. $dir = scandir(__DIR__); // gives an array output
2. is_file();
3. is_dir();
4. mkdir('foo'); rmdir('foo'); mkdir('foo/bar', recursive: true); rmdir('foo/bar');
5. file_exists('file.txt'); filesize('file.txt');
6. file_put_contents('file.txt', 'hello beau gosse'); clearstatcache(); 
7. $file = fopen('file.txt', 'r');
8. unlink('file1.txt); copy('foo.txt', 'bar.txt'); // copy foo.txt into bar.txt
9. rename('foo.txt', 'bar.txt'); // Rename foo.txt into bar.txt
10.  pathinfo('public/src);

```php
// file_put_contents('file.txt', 'hello beau gosse'); // overwrites contents
//file_put_contents('file.txt', 'hello beau gosse', FILE_APPEND ); // appends contents
$file = fopen('file.txt', 'r');

while ($line = (fgets($file) !== false)) {
    echo $line . '<br />';
}

fclose($file);

// OR
$content = file_get_contents('file1.txt');
// $content = file_get_contents('file1.txt', offset: 3, length: 2);
echo $content;

```
**NOTE:** file_put_contents() = fopen() + fwrite() + fclose();

## **CREATING A REAL PROJECT**
**STEPS**
1. Add bootstrap in index.php file from the below link
[bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
2. Add jquery minified file from
[jquery](https://releases.jquery.com/)
3. Add the minified version of font-awesome from the link
[Font-Awesome](https://cdnjs.com/libraries/font-awesome)

**NOTE:** You can get font-awesome icons from the below link:
[font-awesome icons](https://fontawesome.com/icons)

### POPULAR FONTAWESOME ICONS
```php
1. <i class="fas fa-eye"></i>
2. <i class="fas fa-edit"></i>
3. <i class="fas fa-trash-alt"></i>
4. <i class="fas fa-user-alt"></i>
5. <i class="fas fa-envelope-open"></i>
6. <i class="fas fa-mobile text-light"></i>
7. <i class="fa-solid fa-magnifying-glass"></i>
8. <i class="fas fa-user-alt"></i>
```

### Fixing phpstorm unresolved function or method $() Or $.ajax() not a function
Visit this link
[Stackoverflow](https://stackoverflow.com/questions/21616683/phpstorm-unresolved-function-or-method)


