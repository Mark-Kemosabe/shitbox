function show(value)
{
    document.getElementById('display').value += value;
}

function get()
{
    const display = document.getElementById('display');
    try
    {
        display.value = eval(display.value);

    }
    catch (error)
    {
        display.value = 'Error';
    }   


}

function clearDisplay()
{
    document.getElementById('display').value = '';

}